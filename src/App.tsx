import { Post, PostProps } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import "./global.css";
import styles from "./App.module.css";

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/daniel3858.png",
      name: "Daniel Albuquerque",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Novo post😎👌" },
      { type: "paragraph", content: "Esse post tá braboo demaaiiss." },
      { type: "link", content: "Aprenda mais sobre desenvolvimento web." },
    ],
    publishedAt: new Date("2024-05-03 14:36:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Douglas Bahia",
      role: "Educator Pioneiros",
    },
    content: [
      { type: "paragraph", content: "Novo post😎👌" },
      { type: "paragraph", content: "Esse post tá braboo demaaiiss." },
      { type: "link", content: "Aprenda mais sobre desenvolvimento web." },
    ],
    publishedAt: new Date("2024-12-03 14:36:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
