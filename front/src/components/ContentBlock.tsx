import { Props } from "./MainLayout"

export const ContentBlock = (props : Props) => {
	return (
		<div className="w-full bg-blue-100 rounded-xl flex-1">
			{props.children}
		</div>
	)
}