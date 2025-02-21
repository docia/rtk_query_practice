import { useState, ChangeEvent } from "react";
import JSZip from "jszip";

interface CustomFile extends File {
  preview: string;
  formattedSize: string;
}

const ZipImport = () => {
  const [selectedFiles, setSelectedFiles] = useState<CustomFile[]>([]);

  // Convert Bytes to Readable Format
  const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // Handle File Selection
  const handleAcceptedFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    console.log(
      "Selected files:",
      files.map((f) => ({
        name: f.name,
        type: f.type,
        size: f.size,
      }))
    );

    // Create CustomFile objects properly
    const customFiles = files.map((file) => {
      // Create a new File object with the same properties
      const customFile = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified,
      });

      // Add our custom properties
      return Object.assign(customFile, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      }) as CustomFile;
    });

    console.log(
      "Processed custom files:",
      customFiles.map((f) => ({
        name: f.name,
        type: f.type,
        size: f.size,
        preview: f.preview,
        formattedSize: f.formattedSize,
      }))
    );

    setSelectedFiles(customFiles);
  };

  // Create and Download Zip
  const handleCreateZip = async () => {
    if (selectedFiles.length === 0) {
      alert("No files selected!");
      return;
    }

    console.log(
      "Starting zip creation with files:",
      selectedFiles.map((f) => ({
        name: f.name,
        type: f.type,
        size: f.size,
      }))
    );

    const zip = new JSZip();

    try {
      // Add files to zip
      for (const file of selectedFiles) {
        console.log("Processing file:", {
          name: file.name,
          type: file.type,
          size: file.size,
        });

        // Read file directly without Blob conversion
        const arrayBuffer = await file.arrayBuffer();
        console.log("File read as ArrayBuffer:", {
          fileName: file.name,
          bufferSize: arrayBuffer.byteLength,
        });

        zip.file(file.name, arrayBuffer);
      }

      // Generate zip file
      console.log("Generating zip file...");
      const zipContent = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 9 },
      });
      console.log("Zip file generated:", {
        size: zipContent.size,
        type: zipContent.type,
      });

      // Create download link and trigger download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipContent);
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      link.download = `archive-${timestamp}.zip`;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(link.href), 0);
    } catch (error) {
      console.error("Error creating zip:", error);
      alert("Failed to create zip file!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ZIP File Creator</h2>

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

      {/* Create ZIP Button */}
      <button onClick={handleCreateZip} disabled={selectedFiles.length === 0}>
        Create and Download ZIP
      </button>
    </div>
  );
};

export default ZipImport;
