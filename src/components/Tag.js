import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
	const [tag, setTag] = useState("car");

	const { gif, loading, fetchData } = useGif(tag);

	return (
		<div
			className="w-1/2  bg-fuchsia-600 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]"
		>
			<h1 className="mt-[15px] text-2xl underline uppercase font-bold">
				{" "}
				Random {tag} Gif
			</h1>

			{loading ? <Spinner /> : <img src={gif} width="450" />}

			<input
				className="w-10/12 text-xl py-2 rounded-lg mb-[3px] text-center font-bold"
				onChange={(event) => setTag(event.target.value)}
				value={tag}
			/>

			<button
				onClick={() => fetchData(tag)}
				className="w-10/12 bg-blue-500 text-xl py-2 rounded-lg mb-[20px] font-bold"
			>
				Generate
			</button>
		</div>
	);
};

export default Tag;
