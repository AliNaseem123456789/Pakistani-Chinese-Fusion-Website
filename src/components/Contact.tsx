// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
// import { useState } from 'react';

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     guests: '2',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Thank you for your reservation request! We will contact you shortly to confirm.');
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       date: '',
//       time: '',
//       guests: '2',
//       message: ''
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <section className="bg-gradient-to-r from-emerald-900 via-red-900 to-amber-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl mb-4">Contact Us</h1>
//           <p className="text-xl text-amber-200">We'd love to hear from you</p>
//         </div>
//       </section>

//       {/* Contact Info & Form */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div>
//               <h2 className="text-3xl mb-8">Get In Touch</h2>
              
//               <div className="space-y-6">
//                 {/* Karachi Location */}
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h3 className="text-xl mb-4 text-amber-600">Karachi Location</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
//                       <div>
//                         <p>123 Fusion Street</p>
//                         <p>Clifton Block 5, Karachi</p>
//                         <p>Pakistan</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Phone className="text-emerald-600 flex-shrink-0" size={20} />
//                       <p>+92 300 1234567</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Mail className="text-emerald-600 flex-shrink-0" size={20} />
//                       <p>karachi@silkandspice.com</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Lahore Location */}
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h3 className="text-xl mb-4 text-amber-600">Lahore Location</h3>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <MapPin className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
//                       <div>
//                         <p>456 Silk Road</p>
//                         <p>Gulberg III, Lahore</p>
//                         <p>Pakistan</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Phone className="text-emerald-600 flex-shrink-0" size={20} />
//                       <p>+92 300 7654321</p>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Mail className="text-emerald-600 flex-shrink-0" size={20} />
//                       <p>lahore@silkandspice.com</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hours */}
//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                   <h3 className="text-xl mb-4 text-amber-600">Opening Hours</h3>
//                   <div className="flex items-start gap-3">
//                     <Clock className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
//                     <div className="space-y-1">
//                       <p>Wednesday-Monday: 11:00 AM - 10:00 PM</p>
//                       {/* <p>Friday - Sunday: 11:00 AM - 12:00 AM</p> */}
//                       <p className="text-sm text-gray-600 mt-2">Last orders 30 minutes before closing</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Reservation Form */}
//             <div>
//               <h2 className="text-3xl mb-8">Make a Reservation</h2>
//               <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
//                 <div className="space-y-4">
//                   <div>
//                     <label htmlFor="name" className="block mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                       placeholder="Your name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                       placeholder="+92 300 1234567"
//                     />
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="date" className="block mb-2">
//                         Date *
//                       </label>
//                       <input
//                         type="date"
//                         id="date"
//                         name="date"
//                         required
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="time" className="block mb-2">
//                         Time *
//                       </label>
//                       <input
//                         type="time"
//                         id="time"
//                         name="time"
//                         required
//                         value={formData.time}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="guests" className="block mb-2">
//                       Number of Guests *
//                     </label>
//                     <select
//                       id="guests"
//                       name="guests"
//                       required
//                       value={formData.guests}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
//                     >
//                       {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
//                         <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
//                       ))}
//                       <option value="10+">10+ Guests (We'll contact you)</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block mb-2">
//                       Special Requests (Optional)
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={4}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
//                       placeholder="Any dietary restrictions, special occasions, or seating preferences?"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
//                   >
//                     <Send size={20} />
//                     Submit Reservation
//                   </button>

//                   <p className="text-sm text-gray-600 text-center">
//                     We'll confirm your reservation within 24 hours
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl text-center mb-8">Find Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Placeholder for maps - in a real implementation, you'd use Google Maps or similar */}
//             <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
//               <div className="text-center p-8">
//                 <MapPin size={48} className="mx-auto mb-4 text-gray-500" />
//                 <h3 className="text-xl mb-2">Karachi Location</h3>
//                 <p className="text-gray-600">123 Fusion Street, Clifton Block 5</p>
//               </div>
//             </div>
//             <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
//               <div className="text-center p-8">
//                 <MapPin size={48} className="mx-auto mb-4 text-gray-500" />
//                 <h3 className="text-xl mb-2">Lahore Location</h3>
//                 <p className="text-gray-600">456 Silk Road, Gulberg III</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
