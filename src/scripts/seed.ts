import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Alphabets",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "Words",
        imageSrc: "/it.svg",
      },
      {
        id: 3,
        title: "Sentences",
        imageSrc: "/fr.svg",
      }
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Spanish
        title: "Unit 1",
        description: "one letter",
        order: 1,
      },
      {
        id: 2,
        courseId: 1, // Spanish
        title: "Unit 2",
        description: "two letters",
        order: 2,
      },
      {
        id: 3,
        courseId: 1, // Spanish
        title: "Unit 3",
        description: "three letters",
        order: 3,
      },

    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 1,
        title: "letter A-g",
      },
      {
        id: 2,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 2,
        title: "letter g-o",
      },
      {
        id: 3,
        unitId: 1, // Unit 1 (Learn the basics...)
        order: 3,
        title: "letter h-z",
      },
     
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Guess the correct',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 2,
        question: 'Guess the correct',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Guess the correct',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these is "the man"?
        imageSrc: "/apple.png",
        correct: true,
        text: "A",
        audioSrc: "",
      },
      {
        challengeId: 1,
        imageSrc: "/duck.png",
        correct: false,
        text: "D",
        audioSrc: "",
      },
      {
        challengeId: 1,
        imageSrc: "/elephant.png",
        correct: false,
        text: "E",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // Which one of these is "the man"?
        imageSrc: "/car.png",
        correct: false,
        text: "C",
        audioSrc: "",
      },
      {
        challengeId: 2,
        imageSrc: "/duck.png",
        correct: true,
        text: "D",
        audioSrc: "",
      },
      {
        challengeId: 2,
        imageSrc: "/elephant",
        correct: false,
        text: "E",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Which one of these is the "the robot"?
        imageSrc: "/ball.png",
        correct: false,
        text: "B",
        audioSrc: "",
      },
      {
        challengeId: 3,
        imageSrc: "/elephant.png",
        correct: false,
        text: "E",
        audioSrc: "",
      },
      {
        challengeId: 3,
        imageSrc: "/grape.png",
        correct: true,
        text: "G",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 5,
        lessonId: 2, // Verbs
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 6,
        lessonId: 2, // Verbs
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
