import { IsString, MaxLength, MinLength, Matches } from "class-validator";

export class AuthCredentialsDto {
    @IsString()
    @MaxLength(20)
    @MinLength(5)
    username: string;

    @IsString()
    @MaxLength(20)
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
    password: string;
}