import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import useSWR from 'swr';

import Footer from '../components/footer';
import Card from '../components/card';
import Grid from '../components/grid';
import Title from '../components/title';

import ReactLoading from 'react-loading';

function useDocsets() {
	const { data, error } = useSWR('/api/docsets');
	return {
		data,
		isLoading: !error && !data,
		isError: error
	};
}

function useCheatsheets() {
	const { data, error } = useSWR('/api/cheatsheets');
	return {
		data,
		isLoading: !error && !data,
		isError: error
	};
}

const loading = (
	<div className="flex justify-center items-center">
		<ReactLoading type="bubbles" color="black" />
	</div>
);

export default function Home() {
	const docsetsData = useDocsets();
	const cheatsheetsData = useCheatsheets();

	const [ input, setInput ] = useState('');
	const [ computedRepos, setComputedRepos ] = useState([]);
	const [ computedCheatSheets, setComputedCheatSheets ] = useState([]);

	const fSearch = debounce(() => {
		const options = {
			keys: [ 'name' ]
		};
		const computedRepos = new Fuse(get(docsetsData, 'data', []), options).search(input).map((e) => e.item);
		const computedCheatSheets = new Fuse(get(cheatsheetsData, 'data', []), options)
			.search(input)
			.map((e) => e.item);

		setComputedRepos(computedRepos);
		setComputedCheatSheets(computedCheatSheets);
	}, 250);

	useEffect(fSearch, [ input ]);

	const docsets = !input ? docsetsData.data : computedRepos;
	const cheatsheets = !input ? cheatsheetsData.data : computedCheatSheets;

	return (
		<Fragment>
			<Head>
				<title>Zeal User Contributions & Cheat Sheets</title>
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
				/>
				<link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
				<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
				<link rel="icon" href="/favicon-48.png" sizes="48x48" type="image/png" />
				<link rel="icon" href="/favicon-62.png" sizes="62x62" type="image/png" />
				<link rel="icon" href="/favicon-192.png" sizes="192x192" type="image/png" />
				<meta
					name="description"
					content="Non-Official Zeal User Contributions & Cheat Sheets Repository - Create by xantiagoma"
				/>
			</Head>
			<div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
				<span className="mr-1">Often Heroku's free hours are exceeded, please use</span>
				<strong>
					<a href="https://zealusercontributions.now.sh/">zealusercontributions.now.sh</a>
				</strong>
				<span className="ml-1">instead.</span>
			</div>
			<div className="flex flex-col text-center justify-center content-center">
				<img src="/favicon-192.png" alt="Zeal Logo" className="logo w-32 self-center py-8" />
				<h1>
					<span className="block text-2xl">Welcome to</span>
					<span className="block text-4xl">Zeal User Contributions</span>
				</h1>
				<p className="text-sm">Non-Official Zeal User Contributions (& Cheat Sheets) Repository</p>
			</div>
			<nav className="flex bg-gray-200 my-2 sm:sticky sm:top-0 shadow-xs">
				<div className="flex flex-col sm:flex-row container mx-auto px-4">
					<ul className="flex justify-center py-4">
						<li>
							<a className="flex text-lg mr-4 hover:text-blue-700" href="#docsets">
								<svg className="w-4 mr-1" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
									/>
								</svg>
								Docsets
							</a>
						</li>
						<li>
							<a className="flex text-lg mr-4 hover:text-blue-700" href="#cheatsheets">
								<svg className="w-4 mr-1" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
									/>
								</svg>
								Cheat Sheets
							</a>
						</li>
						<li>
							<a className="flex text-lg hover:text-blue-700" href="#usage">
								<svg className="w-4 mr-1" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"
									/>
								</svg>
								Usage
							</a>
						</li>
					</ul>
					<div className="flex justify-center content-center sm:ml-auto items-center pb-4 sm:pb-0">
						<div className="relative text-gray-600">
							<input
								type="search"
								name="serch"
								className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
								placeholder="Search..."
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
								<svg
									className="h-4 w-4 fill-current"
									viewBox="0 0 56.966 56.966"
									xmlSpace="preserve"
									width="512px"
									height="512px"
								>
									<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<main className="container mx-auto">
				<Title id="docsets" text="Docsets" />
				{!docsetsData.isLoading && <Grid>{docsets.map((e) => <Card {...e} key={'docsets-' + e.name} />)}</Grid>}
				{docsetsData.isLoading && loading}
				<Title id="cheatsheets" text="Cheat Sheets" />
				{!cheatsheetsData.isLoading && (
					<Grid>
						{cheatsheets.map((e) => <Card {...e} cheatsheet={true} key={'cheatsheets-' + e.name} />)}
					</Grid>
				)}
				{cheatsheetsData.isLoading && loading}
				<Title id="usage" text="Usage" />
				<div className="px-4">
					<p>Go ➡ Settings ➡ Docsets ➡ Add feed</p>
					<p>Paste Docset / Cheatsheet XML url</p>
					<img src="/Zeal_Download.png" width="960" height="718" alt="Screenshot Zeal" />
					<h3 className="text-xl">Other endpoints</h3>
					<ul>
						<li className="ml-4">
							<a href="/api/docsets" target="_blank" className="hover:text-blue-700">
								/api/docsets
							</a>
						</li>
						<li className="ml-4">
							<a href="/api/cheatsheets" target="_blank" className="hover:text-blue-700">
								/api/cheatsheets
							</a>
						</li>
					</ul>
				</div>
			</main>
			<Footer />
			<button
				className="fixed right-0 bottom-0 w-8 h-8 bg-gray-200 mr-2 mb-2 rounded-md hover:bg-gray-300"
				onClick={() => window.scrollTo(0, 0)}
			>
				<svg viewBox="0 0 24 24">
					<path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
				</svg>
			</button>
		</Fragment>
	);
}
