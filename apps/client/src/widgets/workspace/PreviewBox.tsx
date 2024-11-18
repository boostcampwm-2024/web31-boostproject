type PreviewBoxProps = {
  activeTab: 'preview' | 'html' | 'css';
  setActiveTab: (tab: 'preview' | 'html' | 'css') => void;
  htmlCode: string;
};

export const PreviewBox = ({ activeTab, setActiveTab, htmlCode }: PreviewBoxProps) => {
  return (
    <section className="flex-1 border-b border-gray-100">
      <nav className="flex h-10 border-b border-gray-100">
        <button
          onClick={() => setActiveTab('preview')}
          className={`${activeTab === 'preview' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
        >
          미리보기
        </button>
        <button
          onClick={() => setActiveTab('html')}
          className={`${activeTab === 'html' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 border-r border-gray-100 bg-green-500`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`${activeTab === 'css' ? 'bg-green-500 text-white' : 'bg-white text-gray-200'} h-full flex-1 bg-green-500`}
        >
          CSS
        </button>
      </nav>
      <div className="min-h-[20rem]">
        {activeTab === 'preview' && <iframe srcDoc={htmlCode} title="Preview"></iframe>}
        {activeTab === 'html' && <pre className="whitespace-pre-wrap">{htmlCode}</pre>}
        {activeTab === 'css' && <p>css 파싱 기능은 구현 중 입니다.</p>}
      </div>
    </section>
  );
};
