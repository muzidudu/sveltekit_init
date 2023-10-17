<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { locale, locales, t } from '$lib/translations';

	$: ({ route } = $page.data);
</script>

<p>{$t('current_lang')} {$locale} - {$t(`lang.${$locale}`)}</p>
<hr />
<div>
	<select on:change={({ target }) => goto(target.value)}>
		{#each $locales as lc}
			<option value="/{lc}{route}" selected={lc === $locale}>{$t(`lang.${lc}`)}</option>
		{/each}
	</select>
</div>