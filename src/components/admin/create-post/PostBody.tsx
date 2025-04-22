"use client";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { ErrorMessage, useFormikContext } from "formik";
import { PostData } from "./CreatePost";

const PostBody = () => {
	const editorRef = useRef<HTMLDivElement>(null);
	const quillInstanceRef = useRef<Quill | null>(null);
	const { setFieldValue, values } = useFormikContext<PostData>();

	useEffect(() => {
		if (editorRef.current && !quillInstanceRef.current) {
			quillInstanceRef.current = new Quill(editorRef.current, {
				theme: "snow",
				modules: {
					toolbar: [
						[{ header: [1, 2, false] }],
						["bold", "italic", "underline", "strike"],
						[{ color: [] }, { background: [] }],
						[{ list: "ordered" }, { list: "bullet" }],
						[{ align: [] }],
						["blockquote", "code-block"],
						["link", "image"],
						["clean"],
					],
				},
				placeholder: "Write your post content here...",
			});

			// Set initial value
			quillInstanceRef.current.root.innerHTML = values.body || "";

			quillInstanceRef.current.on("text-change", () => {
				const html = quillInstanceRef.current?.root.innerHTML ?? "";
				setFieldValue("body", html);
			});
		}
	}, [setFieldValue, values.body]);

	return (
		<div className="w-full flex flex-col gap-y-5">
			<label className="text-[1.7rem] text-appBlack font-medium">
				Post Content
			</label>

			{/* Editor */}
			<div
				ref={editorRef}
				className="bg-white border rounded-xl min-h-[250px]"
			/>

			<ErrorMessage
				name="body"
				component="p"
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
};

export default PostBody;
