import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from "@mui/icons-material/Menu";


const drawerWidth = 240;

function App() {
  const { window } = () => Window;;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState('intro');

  const handleChapterClick = (chapter) => {
    setMobileOpen(false);
    setSelectedChapter(chapter);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem key="A" onClick={() => handleChapterClick('intro')}>
          <ListItemButton>
            <ListItemText primary="Introdução" />
          </ListItemButton>
        </ListItem>
        <ListItem key="B" onClick={() => handleChapterClick('c1')}>
          <ListItemButton>
            <ListItemText primary="Capitulo 1" />
          </ListItemButton>
        </ListItem>
        <ListItem key="C" onClick={() => handleChapterClick('c2')}>
          <ListItemButton>
            <ListItemText primary="Capitulo 2" />
          </ListItemButton>
        </ListItem>
        <ListItem key="D" onClick={() => handleChapterClick('c3')}>
          <ListItemButton>
            <ListItemText primary="Capitulo 3" />
          </ListItemButton>
        </ListItem>
        <ListItem key="E" onClick={() => handleChapterClick('c4')}>
          <ListItemButton>
            <ListItemText primary="Capitulo 4" />
          </ListItemButton>
        </ListItem>
        <ListItem key="F" onClick={() => handleChapterClick('c5')}>
          <ListItemButton>
            <ListItemText primary="Capitulo 5" />
          </ListItemButton>
        </ListItem>
        <ListItem key="G" onClick={() => handleChapterClick('c6')}>
          <ListItemButton>
            <ListItemText primary="Capitulo 6" />
          </ListItemButton>
        </ListItem>
        <ListItem key="H" onClick={() => handleChapterClick('end')}>
          <ListItemButton>
            <ListItemText primary="Mensagem Final" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* AppBar fixo */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" noWrap component="div">
              Cookbook Pro Clubs ⚽👨‍🍳
            </Typography>
            <Typography variant="subtitle1" noWrap component="div">
              Receita Para o Sucesso (Ou Algo Próximo Disso)
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Responsivo */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="drawer navigation"
      >
        {/* Drawer Temporário (telas pequenas) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Melhora o desempenho em dispositivos móveis
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Drawer Permanente (telas maiores) */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Área de conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {selectedChapter === 'intro' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Introdução</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Bem-vindo, jogador sem "skill moves" e com mira de arco e flecha quebrado. Este <b>livro de receitas </b> foi criado especialmente para você, que transforma passes simples em momentos de pura tragédia esportiva. Não se preocupe, cada página aqui é recheada de "dicas culinárias" para fazer de você, pelo menos, um jogador menos desastroso no <b>Pro Clubs</b>.
              Afinal, o que é um time sem um amigo que joga com o carisma de um cone de treino?
            </Typography>
            <div style={{
              position: 'fixed', // Fixa a posição da div em relação à janela
              bottom: 0, // Posiciona a div na parte inferior da página
              left: 0, // Garante que a div comece do canto esquerdo
              width: '100%', // Faz a div ocupar toda a largura
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap', // Permite que as imagens fiquem em uma nova linha se necessário
              gap: '10px', // Espaçamento entre as imagens
              padding: '10px' // Adiciona espaçamento interno (opcional)
            }}>
              <img src="https://images.ctfassets.net/i92rifgawgzm/5FeeBM9B809DLkP4RHPrDU/f823e3050b9884abb8b4a381e20fd8ee/logo-ea-sports-fc.png.adapt.1920w.png" alt="fc" style={{
                maxWidth: '100%', // Faz com que a imagem nunca exceda o tamanho da tela
                height: 'auto', // Mantém a proporção da imagem
                width: '200px' // Tamanho fixo para telas maiores
              }} />
              <img src="https://media.contentapi.ea.com/content/dam/ea/fifa/pro-clubs/common/f22-proclubs-logo.png.adapt.768w.png" alt="proclubs" style={{
                maxWidth: '100%',
                height: 'auto',
                width: '200px'
              }} />
            </div>
          </Box>
        )}

        {/* Capítulo 1 */}
        {selectedChapter === 'c1' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Receita de Passe Simples</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <h4>Ingredientes:</h4>
              <ul>
                <li>1 dedo funcional.</li>
                <li>1 botão de passe curto (geralmente "X" ou "A").</li>
              </ul>
              <h4>Modo de Preparo:</h4>
              <ol>
                <li>Veja um companheiro de equipe a 2 metros de você.</li>
                <li>Respire fundo.</li>
                <li>Aperte o botão de passe <b>sem carregar a força como se estivesse chutando para Marte.</b></li>
                <li>Observe o passe chegar ao destino sem criar uma crise diplomática no time.</li>
              </ol>
              <p><b>Dica do Chef:</b> Se errou o passe, finja que foi intencional: "É que eu estava tentando um lançamento em profundidade, sabe?"</p>
            </Typography>
          </Box>
        )}

        {/* Capítulo 2 */}
        {selectedChapter === 'c2' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>2. Dribles de Luxo para Jogadores de Pé Torto</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <h4>Ingredientes:</h4>
              <ul>
                <li>1 Pro Player com 3 estrelas de habilidade.</li>
                <li>1 botão de drible (geralmente o analógico direito).</li>
                <li>Muita paciência do seu time.</li>
              </ul>
              <h4>Modo de Preparo:</h4>
              <ol>
                <li><b>Não drible se não souber driblar.</b></li>
                <li>Se ignorar o passo anterior, tente algo simples, como um giro (analógico direito girado).</li>
                <li>Perdeu a bola? Tudo bem, mas NÃO faça faltas tentando recuperá-la.</li>
              </ol>
              <p><b>Dica do Chef:</b> Lembre-se, o verdadeiro drible é o passe rápido. Driblar é para Neymar, você é mais um... Felipe Melo.</p>
            </Typography>
          </Box>
        )}

        {/* Capítulo 3 */}
        {selectedChapter === 'c3' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>3. Gol Certeiro: A Receita Improvável</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <h4>Ingredientes:</h4>
              <ul>
                <li>1 chance clara (raras).</li>
                <li>1 botão de chute (geralmente "O" ou "B").</li>
                <li>1 pitada de sorte divina.</li>
              </ul>
              <h4>Modo de Preparo:</h4>
              <ol>
                <li>Posicione-se bem, o que significa não roubar a posição do atacante.</li>
                <li>Quando a bola chegar, chute reto. Nada de firulas ou "tentativas artísticas".</li>
                <li>Reze para o goleiro adversário ter um momento de caridade.</li>
              </ol>
              <p><b>Dica do Chef:</b> Se errar um gol feito, grite "LAG!" e nunca revele a verdade.</p>
            </Typography>
          </Box>
        )}

        {/* Capítulo 4 */}
        {selectedChapter === 'c4' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>4. A Defesa é Uma Arte (Que Você Não Domina)</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <h4>Ingredientes:</h4>
              <ul>
                <li>1 botão de contenção (geralmente "L2" ou "LT").</li>
                <li>1 botão de desarme (geralmente "X" ou "A").</li>
                <li>0 entradas de carrinho suicidas.</li>
              </ul>
              <h4>Modo de Preparo:</h4>
              <ol>
                <li>Não avance feito um touro bravo atrás da bola. Espere o adversário errar.</li>
                <li>Use contenção para parecer que sabe defender.</li>
                <li>Quando tiver certeza, use o botão de desarme – e apenas o botão de desarme.</li>
              </ol>
              <p><b>Dica do Chef:</b> Se errar, culpe a IA. Sempre funciona.</p>
            </Typography>
          </Box>
        )}

        {/* Capítulo 5 */}
        {selectedChapter === 'c5' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>5. O Goleiro: Última Linha ou Última Piada?</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <h4>Ingredientes:</h4>
              <ul>
                <li>1 Pro com reflexos de um gato (ou de um gato velho).</li>
                <li>Botão de pular para a bola (geralmente "Triângulo" ou "Y").</li>
              </ul>
              <h4>Modo de Preparo:</h4>
              <ol>
                <li>Fique no meio do gol. Isso já é mais do que você fez da última vez.</li>
                <li>Quando o adversário chutar, pule na direção correta.</li>
                <li>Se tomar o gol, grite no microfone: "Foi bugado, eu tava na bola!"</li>
              </ol>
              <p><b>Dica do Chef:</b> O goleiro é a posição perfeita para refletir sobre a vida enquanto o time joga sem você.</p>
            </Typography>
          </Box>
        )}

        {/* Capítulo 6 */}
        {selectedChapter === 'c6' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>6. Estratégia: "A Defesa Não é Meu Problema"</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <h4>Ingredientes:</h4>
              <ul>
                <li>1 jogador que só corre para frente.</li>
                <li>0 noção de cobertura defensiva.</li>
              </ul>
              <h4>Modo de Preparo:</h4>
              <ol>
                <li>Deixe que os zagueiros resolvam tudo.</li>
                <li>Fique plantado na frente, esperando uma bola milagrosa.</li>
                <li>Quando perder, culpe o "goleiro".</li>
              </ol>
              <p><b>Dica do Chef:</b> Estrategicamente, grite coisas como "MARCA ELE!", mesmo sem ajudar. Assim, você parece estar envolvido.</p>
            </Typography>
          </Box>
        )}

        {/* Mensagem Final */}
        {selectedChapter === 'end' && (
          <Box sx={{ marginTop: 7, marginBottom: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Mensagem Final</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              <b>Caro amigo</b>, lembre-se: no Pro Clubs, <b>o mais importante não é a vitória</b> (mentira, é sim), mas as risadas compartilhadas quando você perde a bola pela 15ª vez ou manda um passe para o adversário.
              <p />
              Então, vista sua chuteira virtual, siga estas receitas, e quem sabe um dia você deixe de ser a piada do time e se torne... <b>menos pior</b>.
              <p />
              <a href="https://www.xvideos.com/video.ilekuld2a04/mamae_noel_safadinha_mostrando_um_presente_bem_especial_punheta_guiada_joi_metendo_no_cuzinho" target="_blank" rel="noopener noreferrer">Feliz Natal</a>🎄🤶
            </Typography>
          </Box>
        )}
      </Box>
    </Box >
  );
};

export default App;