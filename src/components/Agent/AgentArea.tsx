
const AgentArea = () => {
  return (
    <div className="text-white w-full px-2 py-1">
      <div>
        転職状況
      </div>
      <div className="mb-1">
        <div className="flex gap-2">
          <button type="button" className="border bg-green-500 text-white rounded-md px-2 py-1 text-[9px]">All</button>
          <button type="button" className="border bg-green-500 text-white rounded-md px-2 py-1 text-[9px]">エージェント1</button>
          <button type="button" className="border bg-green-500 text-white rounded-md px-2 py-1 text-[9px]">エージェント2</button>
          <button type="button" className="border bg-green-500 text-white rounded-md px-2 py-1 text-[9px]">エージェント3</button>
          <button type="button" className="border bg-green-500 text-white rounded-md px-2 py-1 text-[9px]">エージェント4</button>
          <button type="button" className="border bg-green-500 text-white rounded-md px-2 py-1 text-[9px]">エージェント5</button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-start w-full text-[10px] border-b-2">
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">エージェント区分</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">会社名</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">カジュアル面談</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">書類選考</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">コーディングテスト</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">筆記試験</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">適性検査</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">一次面接</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">二次面接</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">三次面接</div>
          <div className="w-[6%] [writing-mode:vertical-lr] text-end">最終面接</div>
          <div className="w-[37%] flex items-end">備考</div>
        </div>
        <div className="flex justify-start w-full text-[10px]">
          <div className="w-[6%]">エージェント１</div>
          <div className="w-[6%]">A社</div>
          <div className="w-[6%]">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </div>
          <div className="w-[6%]">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/22)</div>
            </div>
          </div>
          <div className="w-[6%]">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/22)</div>
            </div>
          </div>
          <div className="w-[6%]">
            <div className="flex flex-col justify-center items-center">
              <div>-</div>
            </div>
          </div>
          <div className="w-[6%]">
            <div className="flex flex-col justify-center items-center">
              <div>-</div>
            </div>
          </div>
          <div className="w-[6%]">
            <div>調整中</div>
            <div className="text-[9px]">仮(2023/07/22)</div>
          </div>
          <div className="w-[6%]"></div>
          <div className="w-[6%]"></div>
          <div className="w-[6%]"></div>
          <div className="w-[37%]"></div>
        </div>
      </div>
    </div>
  )
}

export default AgentArea
