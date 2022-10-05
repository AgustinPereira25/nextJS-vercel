import Link from "next/link"
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props{
    href: string;
    text: string;
};
// export const ActiveLink = ({href,text}) => {
export const ActiveLink: React.FC<Props> = ({href ,text}) => {
    const {asPath} = useRouter();

    console.log(asPath)

    return (
        <Link href = {href}>
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link>
    )
}
