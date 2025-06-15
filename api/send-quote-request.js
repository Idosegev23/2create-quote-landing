import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
    
    try {
        const { name, email, phone, company, projectType, budget, timeline, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                success: false, 
                message: 'שם, אימייל וטלפון הם שדות חובה' 
            });
        }
        
        // Configure nodemailer with environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });
        
        // Verify transporter configuration
        await transporter.verify();
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'hello@2create.co.il',
            subject: `בקשת הצעת מחיר חדשה מ-${name}`,
            html: `
                <div dir="rtl" style="font-family: Arial, sans-serif;">
                    <h2>בקשת הצעת מחיר חדשה</h2>
                    
                    <h3>פרטי הלקוח:</h3>
                    <p><strong>שם:</strong> ${name}</p>
                    <p><strong>אימייל:</strong> ${email}</p>
                    <p><strong>טלפון:</strong> ${phone}</p>
                    ${company ? `<p><strong>חברה:</strong> ${company}</p>` : ''}
                    
                    <h3>פרטי הפרויקט:</h3>
                    ${projectType ? `<p><strong>סוג הפרויקט:</strong> ${projectType}</p>` : ''}
                    ${budget ? `<p><strong>תקציב:</strong> ${budget}</p>` : ''}
                    ${timeline ? `<p><strong>לוח זמנים:</strong> ${timeline}</p>` : ''}
                    
                    <h3>הודעת הלקוח:</h3>
                    <p>${message || 'לא הושארה הודעה נוספת'}</p>
                    
                    <hr>
                    <p><small>הודעה זו נשלחה מטופס צור קשר באתר הצעת המחיר של 2Create</small></p>
                </div>
            `
        };
        
        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ 
            success: true, 
            message: 'ההודעה נשלחה בהצלחה' 
        });
        
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'שגיאה בשליחת ההודעה. אנא נסו שנית מאוחר יותר.' 
        });
    }
} 