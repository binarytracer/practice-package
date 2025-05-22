import { Type } from "@fastify/type-provider-typebox";

export const CreateUserSchema = {
  body: Type.Object({
    name: Type.String(),
    email: Type.String(),
    password: Type.String(),
  }),
  response: {
    201: Type.Object({
      id: Type.Number(),
    }),
  },
};

export const UpdateUserSchema = {
  body: Type.Object({
    name: Type.String(),
    email: Type.String(),
    password: Type.String(),
  }),
  response: {
    200: Type.Object({
      id: Type.Number(),
    }),
  },
};

export const DeleteUserSchema = {
  response: {
    200: Type.Object({
      id: Type.Number(),
    }),
  },
};
