# React + TypeScript + Clean Architecture: Advanced Todo List Application

## Overview
This repository presents an advanced Todo List application that I developed using React, TypeScript, and incorporating the principles of Clean Architecture. My code structure adheres to stringent standards to ensure maintainability, testability, and a clear separation of concerns.

## Shared
In the architecture of this project, Shared is not a layer; it's a foundational structure. It is designed without dependencies or business rules, serving as a crucial building block for the application. This ensures reusability and coherence across different components of the project.

## High-level Error Handling with Monads - shared/result
To handle errors efficiently and expressively, I have implemented a monadic pattern using a Result<T, K> type. This approach allows for high-level error control, making it simpler to manage success and failure states in the application's operations.

## Diagram
- Blue lines indicates a "implements" or "extends" relationship;
- White lines indicates a "uses" relationship;

![diagram](./resources/diagram.png)

### Clean Architecture layers
![clean architecture layers](./resources/clean-architecture-layers.png)
