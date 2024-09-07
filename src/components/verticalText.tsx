import  Link, { LinkProps }  from "next/link"
import React, {ReactNode} from "react"

interface RefProps extends LinkProps{
    children: ReactNode;
    href:string;
}
export const VerticalText = ({
    children,
    href,
    ...props
    }: RefProps) => {
    return (
        <div>
            <Link href={href}
            {...props}
            style={{fontSize: 15, writingMode: "vertical-lr"}}>{children}</Link>
        </div>
    )
    
}