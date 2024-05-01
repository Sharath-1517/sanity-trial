import { projectsQuery as query, type Projects } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	const initial = await loadQuery<Projects>(query);

	return {
		query,

		options: { initial }
	};
};
