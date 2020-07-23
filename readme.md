---


---

<h1 id="pipedrive-bling-api">Pipedrive para Bling API</h1>
<p>API de integração que criar pedidos no Bling de acordo com os acordos fechados na plataforma Pipedrive.</p>
<h2 id="como-utilizar">Como utilizar</h2>
<ul>
<li>Configure o arquivo <code>env.example</code> com as informações do banco de dados, pipedrive token e bling api token.</li>
<li>Execute <code>npm install</code> na raiz do projeto para instalar todas as dependências.</li>
</ul>
<h2 id="rotas">Rotas</h2>
<ul>
<li>
<p><code>/api/pipedrive</code> - Rotas de acesso para conteúdo na plataforma Pipedrive</p>
<ul>
<li><strong>[GET]</strong> <code>/api/pipedrive/deals</code>-  Retorna todos os acordos constantes na plataforma.</li>
<li><strong>[GET]</strong> <code>/api/pipedrive/wonDeals</code>- Retorna todos os acordos com status <em>“won”</em> na plataforma.</li>
<li><strong>[GET]</strong> <code>/api/pipedrive/dealsProducts</code>- Retorna todos os produtos dos acordos cadastrados na plataforma.</li>
</ul>
</li>
<li>
<p><code>/api/bling</code> - Rotas de acesso para conteúdo na plataforma Bling</p>
<ul>
<li><strong>[GET]</strong> <code>/api/bling/orders</code>-  Retorna todos os pedidos na plataforma.</li>
<li><strong>[POST]</strong>  <code>/api/bling/createOrders</code>- Cria pedidos baseados nos acordos da plataforma Pipedrive.
<ul>
<li><strong>[PARÂMETROS]</strong> <code>{status: 'won' | 'lost'}</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>[GET]</strong> <code>/api/sales</code> - Retorna o valor do montante de vendas do dia.</p>
</li>
</ul>
<h2 id="exemplo-de.env.example">Exemplo de<code>.env.example</code></h2>
<pre><code>DB_URI=''mongodb+srv://user:cderty11dZqFt9XA@data.zgb5y.gcp.mongodb.net/collection?retryWrites=true&amp;w=majority''

PIPEDRIVE_TOKEN =  'adggegdf9i8s0a8is8u3rh493htr439h'

BLING_TOKEN =  'fjh9h9y439fy43fnho43hf8y4fg4yh'
</code></pre>

