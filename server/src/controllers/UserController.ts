import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../database";
import { encriptPassword } from "../services/auth";

export default {
  async index(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();

      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server error");
    }
  },

  async create(req: Request, res: Response) {
    try {
      const creteUserRequestBody = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      });

      const { name,  email, password } = creteUserRequestBody.parse(
        req.body
      );


      const verifyEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (verifyEmail) {
        return res.status(400).json("Email já cadastrado");
      }

      const encriptedPass = await encriptPassword(password);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: encriptedPass,
        },
      });

      return res.status(201).json({ message: "User created", newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json("Internal server eror");
    }
  },

  async user(req: Request, res: Response) {
    try {
      const { userId } = req;

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return res.status(404).json("User does not exists");
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json("Erro interno no servidor");
    }
  },

  //   async update(req: Request, res: Response) {},

  //   async delete(req: Request, res: Response) {},
};
