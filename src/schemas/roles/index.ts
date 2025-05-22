import { Type } from "@fastify/type-provider-typebox";

export const CreateRoleSchema = {
  body: Type.Object({
    name: Type.String(),
    description: Type.String(),
    permissions: Type.Array(Type.String()),
  }),
  response: {
    201: Type.Object({
      id: Type.Number(),
    }),
  },
};

export const UpdateRoleSchema = {
  body: Type.Object({
    name: Type.String(),
    description: Type.String(),
    permissions: Type.Array(Type.String()),
  }),
  response: {
    200: Type.Object({
      id: Type.Number(),
    }),
  },
};
