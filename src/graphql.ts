
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateRoleInput {
    value: string;
    description?: Nullable<string>;
}

export class UpdateRoleInput {
    id: UUID;
}

export class CreateUserInput {
    email: EmailAddress;
    username: string;
    password: string;
}

export class UpdateUserInput {
    id: UUID;
}

export class Role {
    id: UUID;
    value: string;
    description: string;
    users: Nullable<User>[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class IQuery {
    abstract roles(): Nullable<Role>[] | Promise<Nullable<Role>[]>;

    abstract role(id: UUID): Nullable<Role> | Promise<Nullable<Role>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: UUID): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createRole(createRoleInput: CreateRoleInput): Role | Promise<Role>;

    abstract updateRole(updateRoleInput: UpdateRoleInput): Role | Promise<Role>;

    abstract removeRole(id: UUID): Nullable<Role> | Promise<Nullable<Role>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: UUID): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: UUID;
    email: EmailAddress;
    username: string;
    password: string;
    roles?: Nullable<Nullable<Role>[]>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type Time = any;
export type DateTime = any;
export type Timestamp = any;
export type UtcOffset = any;
export type Duration = any;
export type ISO8601Duration = any;
export type LocalDate = any;
export type LocalTime = any;
export type LocalEndTime = any;
export type EmailAddress = any;
export type NegativeFloat = any;
export type NegativeInt = any;
export type NonEmptyString = any;
export type NonNegativeFloat = any;
export type NonNegativeInt = any;
export type NonPositiveFloat = any;
export type NonPositiveInt = any;
export type PhoneNumber = any;
export type PositiveFloat = any;
export type PositiveInt = any;
export type PostalCode = any;
export type UnsignedFloat = any;
export type UnsignedInt = any;
export type URL = any;
export type BigInt = any;
export type Long = any;
export type Byte = any;
export type UUID = any;
export type GUID = any;
export type Hexadecimal = any;
export type HexColorCode = any;
export type HSL = any;
export type HSLA = any;
export type IPv4 = any;
export type IPv6 = any;
export type ISBN = any;
export type JWT = any;
export type Latitude = any;
export type Longitude = any;
export type MAC = any;
export type Port = any;
export type RGB = any;
export type RGBA = any;
export type SafeInt = any;
export type USCurrency = any;
export type Currency = any;
export type JSON = any;
export type JSONObject = any;
export type IBAN = any;
export type ObjectID = any;
export type Void = any;
export type DID = any;
type Nullable<T> = T | null;
