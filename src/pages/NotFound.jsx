export default function NotFound() {
  return (
    <div
      style={{
        width: '100vw',
        height: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        fontSize: '16px',
      }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '20px', color: '#b41e51' }}>
        페이지가 존재하지 않습니다😅
      </h2>
      <p>링크를 잘못 입력하셨거나 페이지가 삭제/이동되었을 수 있습니다.</p>
    </div>
  )
}
