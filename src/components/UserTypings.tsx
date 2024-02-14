import { Each } from "../utils/Each";
import Caret from "./Caret";
import cn from "classnames";


const UserTypings = ({
    userInput,
    className,
    words,
}: {
    userInput: string,
    className?: string;
    words: string;
}) => {
    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            <Each
                of={typedCharacters}
                render={(char, index) => (
                    <Character key={index} actual={char} expected={words[index]} />
                )}
            />
            <Caret />
        </div>
    )
};


const Character = ({ actual, expected }: { actual: string, expected: string }) => {
    const isCorrect = actual === expected;
    const isWhiteSpace = expected === " ";


    return (
        <span
          className={cn({
            "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,

        })}
    >{expected}</span>);
}

export default UserTypings;
