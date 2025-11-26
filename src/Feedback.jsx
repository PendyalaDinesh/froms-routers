import React, { useRef, useState } from 'react';

export default function Feedback() {
  const nicknameRef = useRef(null);
  const ratingRef = useRef(null);
  const recommendRef = useRef(null);
  const commentsRef = useRef(null);

  const [summary, setSummary] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const nickname = nicknameRef.current?.value || '';
    const rating = ratingRef.current?.value;
    const wouldRecommend = recommendRef.current?.checked || false;
    const comments = commentsRef.current?.value || '';

    if (!rating) {
      alert('Please provide a rating');
      return;
    }

    setSummary({ nickname, rating, wouldRecommend, comments });
  }

  return (
    <section style={{ 
      maxWidth: 700, 
      margin: "auto", 
      padding: 20, 
      fontFamily: "Arial, sans-serif" 
    }}>
      
      <h1 style={{ marginBottom: 20 }}>Feedback (Uncontrolled Form)</h1>

      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", gap: 18 }}
      >

        {/* Nickname */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold" }}>Nickname</label>
          <input 
            ref={nicknameRef} 
            name='nickname'
            style={{
              padding: 8,
              border: "1px solid #aaa",
              borderRadius: 4
            }}
          />
        </div>

        {/* Rating */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold" }}>Rating (1–5)</label>
          <select 
            ref={ratingRef} 
            defaultValue='' 
            style={{
              padding: 8,
              border: "1px solid #aaa",
              borderRadius: 4
            }}
          >
            <option value='' disabled>Choose...</option>
            <option>1</option><option>2</option><option>3</option>
            <option>4</option><option>5</option>
          </select>
        </div>

        {/* Recommend */}
        <div>
          <label 
            style={{ 
              display: "inline-flex", 
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            <input ref={recommendRef} type='checkbox' />
            Would recommend?
          </label>
        </div>

        {/* Comments */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ fontWeight: "bold" }}>Comments</label>
          <textarea 
            ref={commentsRef} 
            rows={4}
            style={{
              padding: 8,
              border: "1px solid #aaa",
              borderRadius: 4
            }}
          />
        </div>

        {/* Submit button */}
        <div>
          <button 
            type='submit' 
            style={{
              background: "#0077ff",
              color: "white",
              border: "none",
              padding: "10px 14px",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 15
            }}
          >
            Submit Feedback
          </button>
        </div>
      </form>

      {/* Summary section */}
      {summary && (
        <div 
          style={{ 
            marginTop: 20, 
            border: "1px solid #ccc", 
            padding: 16,
            borderRadius: 6
          }}
        >
          <h3>Feedback Summary</h3>
          <p><strong>Nickname:</strong> {summary.nickname || '(none)'}</p>
          <p><strong>Rating:</strong> {summary.rating}</p>
          <p><strong>Would Recommend:</strong> {summary.wouldRecommend ? 'Yes' : 'No'}</p>
          <p><strong>Comments:</strong> {summary.comments || '(none)'}</p>
        </div>
      )}
    </section>
  );
}
