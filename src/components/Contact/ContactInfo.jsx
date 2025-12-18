import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactInfoCard } from './ContactInfoCard';

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactInfoCard icon={MapPin} title="Location">
        <p className="text-gray-700">30 Nassau Blvd, Garden City,</p>
        <p className="text-gray-700">NY 11530</p>
      </ContactInfoCard>

      <ContactInfoCard icon={Phone} title="Phone">
        <p className="text-gray-700">(516) 483-8888</p>
        <p className="text-gray-700">+1 (212) 555-5426</p>
      </ContactInfoCard>

      <ContactInfoCard icon={Mail} title="Email">
        <p className="text-gray-700">Khaochineseny@gmail.com</p>
        {/* <p className="text-gray-700">reservations@khao.nyc</p> */}
      </ContactInfoCard>

      <ContactInfoCard icon={Clock} title="Opening Hours">
        <div className="space-y-2 text-gray-700">
          <p>Wednesday-Monday: 11:00 AM - 10:00 PM</p>
          {/* <p>Friday - Sunday: 11:30 AM - 11:00 PM</p> */}
          {/* <p className="text-sm text-gray-500 mt-2">Last orders 30 minutes before closing</p> */}
        </div>
      </ContactInfoCard>
    </div>
  );
}
