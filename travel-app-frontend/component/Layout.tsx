import { NavBar } from "./NavBar";


export function Layout (props: any) {
    return (
        <div>
            <NavBar/>
            {props.children}
        </div>
    )

}