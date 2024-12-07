import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { loginSchema, registerSchema } from "../schema";

const app = new Hono()
    .post(
        "/login", 
        zValidator("json", loginSchema),
        async (c) => {
            const { email, password } = c.req.valid("json");

            console.log (email, password);

            return c.json({ email, password });
        }
    )
    .post(
        "/register",
        zValidator("json", registerSchema),
        async (c) => {
            const { firstName, lastName, email, password, confirmPassword } = c.req.valid("json");

            console.log (firstName, lastName, email, password, confirmPassword);

            return c.json({ firstName, lastName, email, password, confirmPassword });
        }
    )

export default app;