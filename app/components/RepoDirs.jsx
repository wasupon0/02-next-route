import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const response = await fetch(
    `https://api.github.com/repos/wasupon0/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const contents = await response.json();
  return contents;
}

export default async function RepoDirs({ name }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
