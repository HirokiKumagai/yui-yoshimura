import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import TableLayout from '../components/table/TableLayout'
import TableHeader from '../components/table/TableHeader'
import TableContent from '../components/table/TableContent'

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
      <main className="w-screen">
        <Top/>
        <TableLayout>
          <tr>
            <TableHeader title="名前" />
              <td className="
                border
                block
                w-full
                h-full
                px-8 py-4
                md:table-cell
                md:w-2/3
                ">
                <div className="bg-yui-picture bg-cover bg-center h-20 w-20"/>
                <p>吉村ゆい</p>
              </td>
          </tr>
          <tr>
            <TableHeader title="職業" />
            <TableContent content="伝統芸能"/>
          </tr>
          <tr>
            <TableHeader title="出身地" />
            <TableContent content="福岡" />
          </tr>
          <tr>
            <TableHeader title="プロフィール" />
            <TableContent content="吉村ゆいは日本の古典芸能舞踊家\n
            公益社団法人 日本舞踊協会会員\n
            主に関東で活躍" />
          </tr>
          <tr>
            <TableHeader title="出演予定" />
            <TableContent content="2021年9月5日 国立大劇場 吉村流吉村会\n
            2022年2月2日 国立大劇場 吉村ゆい舞の會\n
            (2022年2月2日 国立大劇場 吉村ゆい舞の會はただいま延期とさせていただいております。)" />
          </tr>
          <tr>
            <TableHeader title="お問い合わせ" />
            <TableContent content="03-3263-0050\n
            info@yoshimura-yui.com" />
          </tr>
          <tr>
            <TableHeader title="稽古場紹介" />
            <td className="
              border
              block
              w-full
              h-full
              px-8 py-4
              md:table-cell
              md:w-2/3
              ">
                <Link href="https://www.yoshimura-yui-buyoschool.com/">
                  <a className="border-b-2 border-red-500">吉村ゆいの 稽古場はこちら</a>
                </Link>
            </td>
          </tr>
        </TableLayout>
      </main>
    </div>
  )
}
