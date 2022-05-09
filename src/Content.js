        function Story (props) {
            const test = [];
            return (
                <div class="story">
                    <div class="imagem"><img src={props.userImg}/></div>
                    <div class="usuario">{props.user}</div>
                </div>
            )
        }

        function StorysCont (){
            return (
                <div class="stories">
                    <Story userImg="assets/img/9gag.svg" user="9gag" />
                    <Story userImg="assets/img/meowed.svg" user="meowed" />
                    <Story userImg="assets/img/barked.svg" user="barked" />
                    <Story userImg="assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet" />
                    <Story userImg="assets/img/wawawicomics.svg" user="wawawicomics" />
                    <Story userImg="assets/img/respondeai.svg" user="respondeai" />
                    <Story userImg="assets/img/filomoderna.svg" user="filomoderna" />
                    <Story userImg="assets/img/memeriagourmet.svg" user="memeriagourmet" />

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
            )
        }

        function Post (props) {
            return (
                <div class="post">
                    <div class="topo">
                        <div class="usuario"><img src={props.userImg} />{props.user}</div>
                        <div class="acoes"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
                    </div>
                    <div class="conteudo"><img src={props.postImg}/></div>
                    
                    <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={props.userLikeImg} />
                                <div class="texto">Curtido por <strong>{props.userLikeName}</strong> e <strong>outras {props.userLikeAmount} pessoas</strong></div>
                            </div>
                        </div>
                </div>
            )
        }

        function TimeLineCont () {

            return (
                <div class="posts">
                    <Post
                        userImg="assets/img/meowed.svg"
                        user="meowed"
                        postImg="assets/img/gato-telefone.svg"
                        userLikeImg="assets/img/respondeai.svg"
                        userLikeName="respondeai"
                        userLikeAmount="101.523"
                    />
                    <Post
                        userImg="assets/img/barked.svg"
                        user="barked"
                        postImg="assets/img/dog.svg"
                        userLikeImg="assets/img/adorable_animals.svg"
                        userLikeName="adorable_animals"
                        userLikeAmount="99.159"
                    />
                    <Post
                        userImg="assets/img/capivara-user.png"
                        user="capivarinha"
                        postImg="assets/img/capivarinha.gif"
                        userLikeImg="assets/img/adorable_animals.svg"
                        userLikeName="capivaras>resto"
                        userLikeAmount="999.999"
                    />                    
                </div>
            )
        }

        function User (props) {
            return (
                <div class="usuario">
                    <img src={props.userImg} />
                    <div class="texto">
                        <strong>{props.userNick}</strong>
                        {props.userName}
                    </div>
                </div>
            )
        }

        function UserCont () {
            return (
                <User
                    userImg="assets/img/catanacomics.svg"
                    userNick="catanacomics"
                    userName="Catana" />
            )
        }
/*
        function SuggestSideBar(props) {
            
            return (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={props.friendSuggestImg} />
                        <div class="texto">
                            <div class="nome">
                                {props.friendSuggestName}
                            </div>
                            <div class="razao">
                                Segue você
                            </div>
                        </div>
                    </div>
                    <div class="seguir">
                        Seguir
                    </div>
                </div>
            )
        }

        function SideBar() {  
            
            const suggest = [
                {friendSuggestImg: "./assets/img/bad.vibes.memes.svg", friendSuggestName: "bad.vibes.memes"},
                {friendSuggestImg: "./assets/img/chibirdart.svg", friendSuggestName: "chibirdart"},
                {friendSuggestImg: "./assets/img/razoesparaacreditar.svg", friendSuggestName: "razoesparaacreditar"},
                {friendSuggestImg: "./assets/img/adorable_animals.svg", friendSuggestName: "adorable_animals.svg"},
                {friendSuggestImg: "./assets/img/smallcutecats.svg", friendSuggestName: "smallcutecats"},
            ]
            
            return (
                <div class="sugestoes">
                    {
                        suggest.map(SuggestSideBar => {<SideBar friendSuggestImg={SuggestSideBar.friendSuggestImg} friendSuggestName={SuggestSideBar.friendSuggestName} />
                        })}
                </div>
            )
        }
*/

        function Suggests (props) {

            return (
                <div class="sugestao">
                        <div class="usuario">
                            <img src={props.friendSuggestImg} />
                            <div class="texto">
                                <div class="nome">
                                    {props.friendSuggestName}
                                </div>
                                <div class="razao">
                                    Segue você
                                </div>
                            </div>
                        </div>
                        <div class="seguir">
                            Seguir
                        </div>
                    </div>
            )
        }

        function SuggestCont () {
            return (
                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>
                            Ver tudo
                        </div>
                    </div>
                    <Suggests friendSuggestImg="./assets/img/bad.vibes.memes.svg" friendSuggestName="bad.vibes.memes"/>
                    <Suggests friendSuggestImg="./assets/img/chibirdart.svg" friendSuggestName="chibirdart"/>
                    <Suggests friendSuggestImg="./assets/img/razoesparaacreditar.svg" friendSuggestName="razoesparaacreditar"/>
                    <Suggests friendSuggestImg="./assets/img/adorable_animals.svg" friendSuggestName="adorable_animals.svg"/>
                    <Suggests friendSuggestImg="./assets/img/smallcutecats.svg" friendSuggestName="smallcutecats"/>
                </div>
            )
        }

        function LinksAndCopy () {
            return (
                <div>
                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                    </div>
                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            )
        }

    function LeftContainer () {
    return (
        <div class="esquerda">
            <StorysCont />
            <TimeLineCont />
        </div>
    )
    }

    function RightContainer (){
        return (
            <div class="sidebar">
                <UserCont />
                <SuggestCont />
                <LinksAndCopy />
            </div>
        )
    }

export default function Content () {
    return (
        <div class="corpo">
            <LeftContainer />
            <RightContainer />
        </div>
    )
}