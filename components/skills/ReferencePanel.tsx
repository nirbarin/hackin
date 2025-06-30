import clsx from "clsx"
import { X } from "lucide-react"
import type { FC } from "react"
import { SkillLevels } from "./types"

interface ReferencePanelProps {
	onClose: () => void
}

export const ReferencePanel: FC<ReferencePanelProps> = ({ onClose }) => (
	<div className="my-5 p-4 bg-base-100">
		<div className="flex font-semibold mb-3 text-sm text-base-content items-center">
			<div>Skill Level Reference :</div>
			<div className="grow" />
			<button
				type="button"
				onClick={onClose}
				className="btn btn-circle btn-soft btn-error"
			>
				<X className="w-4 h-4" />
			</button>
		</div>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{SkillLevels.map(level => (
				<div key={level.value} className="flex flex-col p-2 gap-1">
					<div className="flex gap-2 items-center font-medium text-sm text-base-content">
						<span className={clsx("capitalize", `text-${level.bgClass}`)}>
							{level.label}
						</span>
						<span
							className={clsx(
								"w-2 h-2 rounded-full animate-ping-slow",
								level.bgClass,
							)}
						/>
					</div>
					<div className="text-xs text-base-content/60 leading-tight">
						{level.description}
					</div>
				</div>
			))}
		</div>
	</div>
)
