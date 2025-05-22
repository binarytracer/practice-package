import { Type } from "@sinclair/typebox";

export const shortIdSchema = Type.String({ minLength: 6, maxLength: 8 });
