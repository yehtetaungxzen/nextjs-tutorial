"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";

import Profile from "@/components/Profile";

const UserProfile = () => {
	const searchParams = useSearchParams();
	const userName = searchParams.get("name");
	const params = useParams();

	const [userPosts, setUserPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${params.id}/posts`);
			const data = await response.json();

			setUserPosts(data);
		};

		if (params.id) fetchPosts();
	}, []);

	return (
		<Profile
			name={userName}
			desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
			data={userPosts}
		/>
	);
};

export default UserProfile;
