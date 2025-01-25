import { Evaluater } from 'hast-util-to-jsx-runtime';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class SimpleEvaluater implements Evaluater {
  evaluateExpression(expression: any) {
    try {
      // Note: Using eval can be dangerous. It's used here for simplicity.
      return eval(expression);
    } catch (error: any) {
      return `Error evaluating expression: ${error.message}`;
    }
  }

  evaluateProgram(program: any): any {
    try {
      // Note: Using eval can be dangerous. It's used here for simplicity.
      return eval(program);
    } catch (error: any) {
      return `Error evaluating program: ${error.message}`;
    }
  }
}
