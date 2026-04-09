import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";

import { prismaAdapter } from "better-auth/adapters/prisma";

import { PrismaClient, Role } from "@generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { nextCookies } from "better-auth/next-js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

const prismaDB = new PrismaClient({ adapter });

export const auth = betterAuth({
    database: prismaAdapter(prismaDB, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        autoSignIn: false, // Deshabilitar auto sign-in para evitar conflictos con el flujo de actualización de contraseña
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "USER",
                input: true,
            },
            isActive: {
                type: "boolean",
                required: false,
                defaultValue: true,
                input: true,
            },
        },
    },
    databaseHooks: {
        user: {
            create: {
                before: async (user) => {
                    return {
                        data: {
                            ...user,
                            role: user.role ?? "USER",
                            isActive: user.isActive ?? true,
                        },
                    };
                },
            },
        },
    },
    plugins: [
        admin({
            defaultRole: "USER",
            adminUserRoles: ["ADMIN", "USER"],
        }),
        nextCookies(),
    ],
});

/* export const auth = betterAuth({
    database: prismaAdapter(prismaDB, {
        provider: "sqlite", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: Role.CUSTOMER,
                input: true,
            },
            isActive: {
                type: "boolean",
                required: false,
                defaultValue: true,
                input: true,
            },
        },
    },
    plugins: [admin(), nextCookies()],
}); */
