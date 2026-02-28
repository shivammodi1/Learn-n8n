const inputData = $input.first().json;

let rawText = "";

// ✅ Correct path
if (
  inputData.content &&
  inputData.content.parts &&
  inputData.content.parts.length > 0
) {
  rawText = inputData.content.parts[0].text;
} else {
  rawText = "No text found";
}

// Normalize line breaks
rawText = rawText.replace(/\r\n/g, "\n");

// Split by double line break
const sections = rawText.split("\n\n");

// Extract Subject
let subject = "";
let body = rawText;

if (sections[0].startsWith("Subject:")) {
  subject = sections[0].replace("Subject:", "").trim();
  body = sections.slice(1).join("\n\n").trim();
}

return [
  {
    json: {
      subject: subject,
      body: body,
    },
  },
];