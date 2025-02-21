import { useState } from "react";
import JSZip from "jszip";
import axios from "axios";

type CustomFile = File & {
	preview: string;
	formattedSize: string;
};

const ZipImport = () => {
	const [selectedFiles, setSelectedFiles] = useState<CustomFile[]>([]);
	const [zippedFile, setZippedFile] = useState<Blob | null>(null);

	// Convert Bytes to Readable Format
	const formatBytes = (bytes: number, decimals = 2) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
	};

	// Handle File Selection
	const handleAcceptedFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files ? Array.from(event.target.files) : [];

		// Convert File[] to CustomFile[]
		const customFiles: CustomFile[] = files.map((file) => ({
			...file,
			preview: URL.createObjectURL(file),
			formattedSize: formatBytes(file.size),
		}));

		setSelectedFiles(customFiles);
	};

	// const handleAcceptedFiles = async (files) => {
	// 	files.map((file) =>
	// 		Object.assign(file, {
	// 			preview: URL.createObjectURL(file),
	// 			formattedSize: formatBytes(file.size),
	// 		})
	// 	);
	// 	setSelectedFiles(files);
	// 	handleZipFiles();
	// };

	// Zip Files and Upload
	const handleZipFiles = async () => {
		debugger;
		if (selectedFiles.length === 0) {
			alert("No files selected!");
			return;
		}

        const zip = new JSZip();
        
        
		selectedFiles.forEach((file, index) => {
			zip.file(`${index + 1}_${file.name}`, file);
		});
		debugger;
		const zipContent = await zip.generateAsync({ type: "blob" });

		// Save zip file for downloading
		setZippedFile(zipContent);

		// Upload ZIP File
		const formData = new FormData();
		formData.append("uploadFile", zipContent, "zippedfile.zip");

		try {
			await axios.post("/api/file-transfer-upload", formData, {
				headers: { "Content-Type": "multipart/form-data" },
			});
			alert("Upload successful!");
		} catch (error) {
			console.error("Upload failed:", error);
			alert("Upload failed!");
		}
	};

	// Download Zipped File
	const handleDownloadZippedFile = () => {
		if (!zippedFile) {
			alert("No ZIP file available for download!");
			return;
		}

		const blob = new Blob([zippedFile], { type: "application/zip" });
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = "downloaded_files.zip";
		link.click();
	};

	return (
		<div style={{ padding: "20px" }}>
			<h2>ZIP File Uploader</h2>

			{/* File Input */}
			<input multiple type="file" onChange={handleAcceptedFiles} />

			{/* Selected Files List */}
			{selectedFiles.length > 0 && (
				<ul>
					{selectedFiles.map((file, index) => (
						<li key={index}>
							{file.name} - {file.formattedSize}
						</li>
					))}
				</ul>
			)}

			{/* Buttons */}
			<button onClick={handleZipFiles} disabled={selectedFiles.length === 0}>
				Upload as ZIP
			</button>
			<button onClick={handleDownloadZippedFile} disabled={!zippedFile}>
				Download ZIP
			</button>
		</div>
	);
};

export default ZipImport;
