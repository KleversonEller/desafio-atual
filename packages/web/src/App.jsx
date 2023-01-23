import {useEffect, useRef, useState} from 'react';

import { getPost } from './Api';
import imageTest from './images/image-test.png';
import folderIcon from './images/folder.svg';
import imageIcon from './images/image.svg';
import textIcon from './images/text.svg';

import './App.css';

function App() {
  const [post, setPost] = useState();
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const posts = async () => {
      const response = await getPost();
      setPost(response.sort((a, b) => a.id-b.id));
    };
    posts();
  }, []);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <div className='navBar'>
        <img src={folderIcon} alt="Minha Figura" />
        <span>Site / Categoria</span>
      </div>
      <div className='container'>
        {post &&
        post.map((item) => {
          switch (item.type) {
            case "title":
              return <h1>{item.content}</h1>;
              case "paragraph":
                return <p>{item.content}</p>;
                case "img":
                  return <img src={imageTest} alt='Imagem de um deserto' />;
                case "line":
                  return <hr/>
                default:
                  break;
                  }
                })};
        <div>
          <button type="button" onClick={handleClick}>
            Clique para adicionar um novo elemento
          </button>
          <nav ref={menuRef} className={`${menuActive && "active"}`}>
              <span>Text</span>
              <a href="#" className='menu'>
                <img src={textIcon} alt="Minha Figura" />
                <div className='textNav'>
                  <h3>Paragrafo</h3>
                  <span>Adicione um paragrafo ao texto</span>
                </div>
              </a>
              <span>Basic</span>
              <a href="#" className='menu'>
                <img src={imageIcon} alt="Minha Figura" />
                <div className='textNav'>
                  <h3>Imagem</h3>
                  <span>Envie uma imagem</span>
                </div>
              </a>
              <a href="#" className='menu'>
                <img src={textIcon} alt="Minha Figura" />
                <div className='textNav'>
                  <h3>Separador</h3>
                  <span>Crie uma linha</span>
                </div>
              </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default App