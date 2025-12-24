import type { UserResponseDto } from "../dto/userResponse.dto.js";
import { v4 as uuidv4 } from "uuid"

export const testUsers: UserResponseDto[] = [
    {
        id: uuidv4(),
        name: "Alice Smith",
        email: "alice.smith@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Diana Prince",
        email: "diana.prince@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Eve Adams",
        email: "eve.adams@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Frank Miller",
        email: "frank.miller@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Grace Hopper",
        email: "grace.hopper@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Hank Green",
        email: "hank.green@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Ivy Lee",
        email: "ivy.lee@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Jack Black",
        email: "jack.black@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Karen White",
        email: "karen.white@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Leo King",
        email: "leo.king@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Mona Lisa",
        email: "mona.lisa@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Nina Simone",
        email: "nina.simone@example.com",
        createdAt: Date.now().toString()
    },
    {
        id: uuidv4(),
        name: "Oscar Wilde",
        email: "oscar.wilde@example.com",
        createdAt: Date.now().toString()
    }
]