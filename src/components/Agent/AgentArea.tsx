import AgentRadioGroup from "./AgentRadioGroup";
import {useEffect, useState} from "react";
import {Client} from "@notionhq/client"
import {GetDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

const AgentArea = () => {

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const [res, setRes]:any = useState({});

  return (
    <div className="text-white w-full px-2 py-1">
      <div>
        <pre>
          RES : {JSON.stringify(res, null, 2)}
        </pre>
      </div>
      <div>
        転職状況
      </div>
      <AgentRadioGroup />
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th className="px-6 py-3" scope="col">エージェント区分</th>
          <th className="px-6 py-3" scope="col">会社名</th>
          <th className="px-6 py-3" scope="col">カジュアル面談</th>
          <th className="px-6 py-3" scope="col">書類選考</th>
          <th className="px-6 py-3" scope="col">コーディングテスト</th>
          <th className="px-6 py-3" scope="col">筆記試験</th>
          <th className="px-6 py-3" scope="col">適性検査</th>
          <th className="px-6 py-3" scope="col">一次面接</th>
          <th className="px-6 py-3" scope="col">二次面接</th>
          <th className="px-6 py-3" scope="col">三次面接</th>
          <th className="px-6 py-3" scope="col">最終面接</th>
          <th className="px-6 py-3" scope="col">備考</th>
        </tr>
        </thead>
        <tbody>
        <tr className="border-b bg-gray-800 border-gray-700">
          <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">エージェント</td>
          <td className="px-6 py-4">A社</td>
          <td className="px-6 py-4">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </td>
          <td className="px-6 py-4">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </td>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
          <td className="px-6 py-4"></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AgentArea
