import { render } from "@testing-library/react";
import { App } from "./App";

describe("<App />", () => {
  it("should check if the wrapper class is rendering correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <header
          class="header"
        >
          <img
            alt="Ignite logo"
            src="test-file-stub"
          />
        </header>
        <div
          class="wrapper"
        >
          <aside
            class="sidebar"
          >
            <img
              class="cover"
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div
              class="profile"
            >
              <img
                alt="Everton Braga's photo profile in the sidebar"
                class="avatarWithBorder"
                src="https://www.github.com/evertonrbraga.png"
              />
              <strong>
                Everton Braga
              </strong>
              <span>
                Web Developer
              </span>
            </div>
            <footer>
              <a
                href="#"
              >
                <svg
                  aria-label="icone-lapis"
                  fill="currentColor"
                  height="20"
                  viewBox="0 0 256 256"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="none"
                    height="256"
                    width="256"
                  />
                  <path
                    d="M96,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                    x1="136"
                    x2="192"
                    y1="64"
                    y2="120"
                  />
                  <polyline
                    fill="none"
                    points="216 216 96 216 40.5 160.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                    x1="164"
                    x2="68"
                    y1="92"
                    y2="188"
                  />
                </svg>
                Editar seu perfil
              </a>
            </footer>
          </aside>
          <main>
            <article
              class="post"
            >
              <header>
                <div
                  class="author"
                >
                  <img
                    alt="Everton Braga's photo profile in the post"
                    class="avatarWithBorder"
                    src="https://www.github.com/evertonrbraga.png"
                  />
                  <div
                    class="authorInfo"
                  >
                    <strong>
                      Everton Braga
                    </strong>
                    <span>
                      Frontend Developer
                    </span>
                  </div>
                </div>
                <time
                  datetime="2023-12-29T23:00:00.000Z"
                  title="29 de dezembro às 20:00h"
                >
                  há cerca de 2 meses
                </time>
              </header>
              <div
                class="content"
              >
                <p>
                  Fala galeraaa 👋
                </p>
                <p>
                  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                  <a
                    href="#"
                  >
                    jane.design/doctorcare
                  </a>
                </p>
              </div>
              <form
                aria-label="form"
                class="commentForm"
              >
                <strong>
                  Deixe seu feedback
                </strong>
                <textarea
                  name="comment"
                  placeholder="Deixe um comentário"
                  required=""
                />
                <footer
                  aria-label="botao-publicar"
                />
              </form>
              <div
                aria-label="comment-list"
                class="commentList"
              >
                <div
                  aria-label="comment"
                  class="comment"
                >
                  <img
                    alt="Everton Braga's photo profile in the comment"
                    class="avatar"
                    src="https://www.github.com/evertonrbraga.png"
                  />
                  <div
                    class="commentBox"
                  >
                    <div
                      class="commentContent"
                    >
                      <header>
                        <div
                          class="author"
                        >
                          <time
                            datetime="2022-05-11 08:13:30"
                            title="11 de Maio às 08:13h"
                          >
                            Cerca de 1h atrás
                          </time>
                        </div>
                        <button
                          title="Deletar comentário"
                        >
                          <svg
                            aria-label="trash-icon"
                            fill="currentColor"
                            height="24"
                            viewBox="0 0 256 256"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              fill="none"
                              height="256"
                              width="256"
                            />
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                              x1="216"
                              x2="40"
                              y1="56"
                              y2="56"
                            />
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                              x1="104"
                              x2="104"
                              y1="104"
                              y2="168"
                            />
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                              x1="152"
                              x2="152"
                              y1="104"
                              y2="168"
                            />
                            <path
                              d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            />
                            <path
                              d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            />
                          </svg>
                        </button>
                      </header>
                      <p>
                        Comentário feríssimo!
                      </p>
                    </div>
                    <footer>
                      <button>
                        <svg
                          aria-label="thumbsup-icon"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 256 256"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="none"
                            height="256"
                            width="256"
                          />
                          <path
                            d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                          <path
                            d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                        </svg>
                        Aplaudir 
                        <span>
                          0
                        </span>
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
            </article>
            <article
              class="post"
            >
              <header>
                <div
                  class="author"
                >
                  <img
                    alt="Everton Braga's photo profile in the post"
                    class="avatarWithBorder"
                    src="https://www.github.com/diego3g.png"
                  />
                  <div
                    class="authorInfo"
                  >
                    <strong>
                      Diego Fernandes
                    </strong>
                    <span>
                      Fullstack Developer
                    </span>
                  </div>
                </div>
                <time
                  datetime="2023-12-31T23:00:00.000Z"
                  title="31 de dezembro às 20:00h"
                >
                  há cerca de 2 meses
                </time>
              </header>
              <div
                class="content"
              >
                <p>
                  Fala galeraa 👋
                </p>
                <p>
                  Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                  <a
                    href="#"
                  >
                    jane.design/doctorcare
                  </a>
                </p>
              </div>
              <form
                aria-label="form"
                class="commentForm"
              >
                <strong>
                  Deixe seu feedback
                </strong>
                <textarea
                  name="comment"
                  placeholder="Deixe um comentário"
                  required=""
                />
                <footer
                  aria-label="botao-publicar"
                />
              </form>
              <div
                aria-label="comment-list"
                class="commentList"
              >
                <div
                  aria-label="comment"
                  class="comment"
                >
                  <img
                    alt="Everton Braga's photo profile in the comment"
                    class="avatar"
                    src="https://www.github.com/evertonrbraga.png"
                  />
                  <div
                    class="commentBox"
                  >
                    <div
                      class="commentContent"
                    >
                      <header>
                        <div
                          class="author"
                        >
                          <time
                            datetime="2022-05-11 08:13:30"
                            title="11 de Maio às 08:13h"
                          >
                            Cerca de 1h atrás
                          </time>
                        </div>
                        <button
                          title="Deletar comentário"
                        >
                          <svg
                            aria-label="trash-icon"
                            fill="currentColor"
                            height="24"
                            viewBox="0 0 256 256"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              fill="none"
                              height="256"
                              width="256"
                            />
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                              x1="216"
                              x2="40"
                              y1="56"
                              y2="56"
                            />
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                              x1="104"
                              x2="104"
                              y1="104"
                              y2="168"
                            />
                            <line
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                              x1="152"
                              x2="152"
                              y1="104"
                              y2="168"
                            />
                            <path
                              d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            />
                            <path
                              d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="16"
                            />
                          </svg>
                        </button>
                      </header>
                      <p>
                        Comentário feríssimo!
                      </p>
                    </div>
                    <footer>
                      <button>
                        <svg
                          aria-label="thumbsup-icon"
                          fill="currentColor"
                          height="1em"
                          viewBox="0 0 256 256"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            fill="none"
                            height="256"
                            width="256"
                          />
                          <path
                            d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                          <path
                            d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          />
                        </svg>
                        Aplaudir 
                        <span>
                          0
                        </span>
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    `);
  });
});
