import Head from 'next/head'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>上方舞吉村流吉村ゆい</title>
        <meta name="description" content="吉村ゆいのホームページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-col items-center my-4">
        <div className="">上方舞吉村流</div>
        <div className="">吉村 ゆい</div>
      </header>
      <main>
        <div className="top_wrapper">
          <div className="yui_img"></div>
        </div>
        <div className="middle_wrapper">
          <div className="contents">
            <div className="content">
              <div className="title">
                <div className="content_titile">名前</div>
                <div className="content_details">吉村 ゆい</div>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <div className="content_titile">職業</div>
                <div className="content_details">古典芸能</div>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <div className="content_titile">出身地</div>
                <div className="content_details">
                  <p>福岡</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <div className="content_titile">プロフィール</div>
                <div className="content_details">
                  <p>吉村ゆいは日本の古典芸能舞踊家</p>
                  <p>公益社団法人 日本舞踊協会会員</p>
                  <p>主に関東で活躍</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <div className="content_titile">出演予定</div>
                <div className="content_details">
                  {/* <p className="m">2021年9月5日 国立大劇場 吉村流吉村会</p> */}
                  <ul>
                    <li
                      className="m"
                    >
                      2022年4月29日 国立大劇場 日本舞踊協会主催
                      第三十六回舞踊公演 出演予定
                    </li>
                    <li
                      className="m"
                    >
                      2022年5月3日 国立大劇場 宗家吉村輝章 家元吉村ゆい
                      襲名披露公演(延期)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <div className="content_titile">お問い合わせ</div>
                <div className="content_details">
                  <Link href="/contact">
                    <a className="border-red-400 border-b-4">
                      お問い合わせはこちら
                    </a>
                  </Link>
                  <p>稽古場問い合わせ電話番号</p>
                  <p>03-3263-0050</p>
                  <p>090-9763-7878</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="title">
                <div className="content_titile">稽古場紹介</div>
                <div className="content_details">
                  <a href="https://www.yoshimura-yui-buyoschool.com/">
                    吉村ゆいの 稽古場はこちら
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
