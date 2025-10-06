"use client";
import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, Sparkles } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  useEffect(()=>{
   Aos.init({
    duration: 2000, // animation duration in ms
   once: true,     // whether animation should happen only once
    easing: 'ease-in-out',
  });
   
  },[])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0em0wIDI0YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0ek0xMiAyOGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMjQgMGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMjQgMGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 inline-block animate-bounce">
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              We're Here to Help 24/7
            </span>
          </div>

          <h2 data-aos="fade-up" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Get in Touch
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-cyan-100 to-white bg-clip-text text-transparent">
              We'd Love to Hear From You
            </span>
          </h2>

          <p data-aos="fade-up" className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have questions about our courses? Need support? Our team is ready to assist you every step of the way.
          </p>
        </div>

        <div  className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div data-aos="fade-right" className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 transform">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100 text-sm mb-3">We'll respond within 24 hours</p>
              <a href="mailto:support@cpsacademy.com" className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors">
                support@cpsacademy.com
              </a>
            </div>

            {/* Phone Card */}
            <div data-aos="fade-right" className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 transform">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm mb-3">Mon-Fri from 9am to 6pm</p>
              <a href="tel:+1234567890" className="text-cyan-300 hover:text-cyan-200 font-medium transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            {/* Location Card */}
            <div data-aos="fade-right" className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 transform">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100 text-sm mb-3">Come say hello at our office</p>
              <p className="text-cyan-300 font-medium">
                123 Learning Street,<br />
                Education City, EC 12345
              </p>
            </div>

            {/* Business Hours */}
            <div  data-aos="fade-right" className="bg-gradient-to-br from-blue-200/20 to-purple-200/20 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-cyan-300" />
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
              </div>
              <div className="space-y-2 text-blue-100">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                  <p className="text-blue-100 text-sm">Fill out the form and we'll get back to you shortly</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-400/30 animate-bounce">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-blue-100">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-blue-100 ml-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-blue-200/50 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-blue-100 ml-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-blue-200/50 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-blue-100 ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="w-full px-4 py-3.5 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-blue-200/50 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-blue-100 ml-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3.5 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-blue-200/50 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-blue-100 ml-1">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3.5 bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300 text-white placeholder-blue-200/50 backdrop-blur-sm resize-none"
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-blue-200 text-sm text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6 text-lg">Connect with us on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { name: 'Instagram', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-blue-100 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z;
                M0 120L60 100C120 90 240 70 360 65C480 60 600 65 720 70C840 75 960 85 1080 88C1200 92 1320 95 1380 95L1440 90V120H0Z;
                M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;