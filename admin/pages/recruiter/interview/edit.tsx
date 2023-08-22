import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { InterviewForm } from '../../../components/forms/InterviewForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit interview
			</SlotSources.Title>
			<EditScope entity="Interview(id=$id)" redirectOnSuccess="recruiter/interview/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="recruiter/interview/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<InterviewForm />
			</EditScope>
		</>
	)
}
