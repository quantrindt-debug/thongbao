import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // THAY LINK GOOGLE APPS SCRIPT CỦA BẠN VÀO ĐÂY
  const API_URL = "URL_GOOGLE_APPS_SCRIPT_CUA_BAN"

  useEffect(() => {
    if (API_URL !== "URL_GOOGLE_APPS_SCRIPT_CUA_BAN") {
      fetch(API_URL)
        .then((res) => res.json())
        .then((result) => {
          setData(result)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Lỗi tải dữ liệu:", err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#1a73e8' }}>THÔNG BÁO HỌC SINH</h2>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Đang tải dữ liệu...</p>
      ) : (
        <div>
          {data.length === 0 ? (
            <p style={{ textAlign: 'center' }}>Chưa có thông báo mới hoặc chưa gắn URL API.</p>
          ) : (
            data.map((item, index) => (
              <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <h3>{item.title || item.tieuDe || `Thông báo #${index + 1}`}</h3>
                <p>{item.content || item.noiDung || JSON.stringify(item)}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default App