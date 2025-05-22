import { Type, Static } from "@sinclair/typebox";

export const BadRequestSchema = Type.Object({
  message: Type.Literal("Bad Request"),
});
export type BadRequest = Static<typeof BadRequestSchema>;

export const NotFoundSchema = Type.Object({
  message: Type.Literal("Not Found"),
});
export type NotFound = Static<typeof NotFoundSchema>;

export const UnauthorizedSchema = Type.Object({
  message: Type.Literal("Unauthorized"),
});
export type Unauthorized = Static<typeof UnauthorizedSchema>;

export const InternalServerErrorSchema = Type.Object({
  message: Type.Literal("Internal Server Error"),
});
export type InternalServerError = Static<typeof InternalServerErrorSchema>;
