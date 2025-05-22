import { Type } from "@sinclair/typebox";

export const NUMERIC_STRING_MAX_LENGTH = 30;

export const FloatStringSchema = Type.String({
	pattern: '^-?\\d+(\\.\\d+)?$', // Allow up to 12 digits for integers, 2 decimal places
	minLength: 1,
	maxLength: NUMERIC_STRING_MAX_LENGTH,
	description: 'A number (up to 12 digits) represented as a string',
});

export const NonNegativeIntegerAsString = Type.String({
	pattern: '^(0|[1-9]\\d*)$',  // Matches 0 or any positive integer
	minLength: 1,
	maxLength: NUMERIC_STRING_MAX_LENGTH,
	description: 'A non-negative integer (0 or greater), represented as a string',
});
