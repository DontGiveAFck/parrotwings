export const CHANGE_VARIABLE = 'CHANGE_VARIABLE';
type CHANGE_VARIABLE = typeof CHANGE_VARIABLE;

export interface ChangeVariable {
    type: CHANGE_VARIABLE;
    value: boolean;
}

export function changeVariable(
    value: boolean
): ChangeVariable {
    return {
        type: CHANGE_VARIABLE,
        value
    };
}

export type Action =
    | ChangeVariable;
