"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  Plus, 
  Star, 
  Archive, 
  Trash2, 
  Send, 
  Paperclip, 
  MoreHorizontal,
  MessageCircle,
  Users,
  Settings,
  Bell,
  User,
  Phone,
  Video,
  Smile,
  Image,
  Mic,
  CheckCheck,
  Check
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Mock data for conversations
const conversations = [
  {
    id: 1,
    name: "John Doe",
    username: "john_doe",
    lastMessage: "Hey! How's the project going?",
    time: "2m ago",
    unread: 3,
    online: true,
    avatar: "/api/placeholder/40/40",
    messages: [
      { id: 1, text: "Hey there! How are you doing?", sender: "John Doe", time: "10:30 AM", status: "read" },
      { id: 2, text: "I'm doing great! Working on the new project.", sender: "me", time: "10:32 AM", status: "read" },
      { id: 3, text: "That's awesome! Need any help with it?", sender: "John Doe", time: "10:35 AM", status: "read" },
      { id: 4, text: "Actually, yes! Could you review the design files?", sender: "me", time: "10:37 AM", status: "delivered" },
      { id: 5, text: "Of course! Send them over.", sender: "John Doe", time: "10:40 AM", status: "unread" },
      { id: 6, text: "Hey! How's the project going?", sender: "John Doe", time: "Just now", status: "unread" }
    ]
  },
  {
    id: 2,
    name: "Sarah Wilson",
    username: "sarah_w",
    lastMessage: "Thanks for the meeting notes!",
    time: "15m ago",
    unread: 0,
    online: true,
    avatar: "/api/placeholder/40/40",
    messages: [
      { id: 1, text: "Hi Sarah! Here are the meeting notes from today.", sender: "me", time: "2:15 PM", status: "read" },
      { id: 2, text: "Thanks for the meeting notes!", sender: "Sarah Wilson", time: "2:20 PM", status: "unread" }
    ]
  },
  {
    id: 3,
    name: "Design Team",
    username: "design_team",
    lastMessage: "Mike: New mockups are ready for review",
    time: "1h ago",
    unread: 5,
    online: false,
    isGroup: true,
    avatar: "/api/placeholder/40/40",
    messages: [
      { id: 1, text: "Good morning team!", sender: "Alice Cooper", time: "9:00 AM", status: "read" },
      { id: 2, text: "Morning! Ready for today's design review.", sender: "me", time: "9:05 AM", status: "read" },
      { id: 3, text: "New mockups are ready for review", sender: "Mike Johnson", time: "10:30 AM", status: "unread" }
    ]
  },
  {
    id: 4,
    name: "Lisa Chen",
    username: "lisa_chen",
    lastMessage: "Perfect! Let's schedule a call.",
    time: "2h ago",
    unread: 0,
    online: false,
    avatar: "/api/placeholder/40/40",
    messages: [
      { id: 1, text: "Hi Lisa! Can we discuss the marketing campaign?", sender: "me", time: "1:00 PM", status: "read" },
      { id: 2, text: "Perfect! Let's schedule a call.", sender: "Lisa Chen", time: "1:15 PM", status: "unread" }
    ]
  },
  {
    id: 5,
    name: "Alex Thompson",
    username: "alex_t",
    lastMessage: "See you tomorrow!",
    time: "1d ago",
    unread: 0,
    online: false,
    avatar: "/api/placeholder/40/40",
    messages: [
      { id: 1, text: "Don't forget about tomorrow's presentation!", sender: "Alex Thompson", time: "Yesterday", status: "read" },
      { id: 2, text: "Thanks for the reminder! I'm all set.", sender: "me", time: "Yesterday", status: "read" },
      { id: 3, text: "See you tomorrow!", sender: "Alex Thompson", time: "Yesterday", status: "unread" }
    ]
  }
];

const folders = [
  { name: "All Chats", icon: MessageCircle, count: 12 },
  { name: "Starred", icon: Star, count: 3 },
  { name: "Groups", icon: Users, count: 2 },
  { name: "Archived", icon: Archive, count: 5 },
];

export default function MessengerPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFolder, setActiveFolder] = useState("All Chats");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(conversations[0].messages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "sent"
      };
      
      setMessages([...messages, message]);
      setNewMessage("");
      
      // Update conversation last message
      const updatedConversations = conversations.map(conv => 
        conv.id === selectedConversation.id 
          ? { ...conv, lastMessage: newMessage, time: "Just now" }
          : conv
      );
      
      // Simulate message status updates
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === message.id ? { ...msg, status: "delivered" } : msg
        ));
      }, 1000);
      
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === message.id ? { ...msg, status: "read" } : msg
        ));
      }, 2000);
      
      // Simulate auto-reply for demo
      if (selectedConversation.name !== "Design Team") {
        setTimeout(() => {
          const reply = {
            id: messages.length + 2,
            text: getAutoReply(newMessage),
            sender: selectedConversation.name,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: "unread"
          };
          setMessages(prev => [...prev, reply]);
        }, 3000);
      }
    }
  };

  const getAutoReply = (message) => {
    const replies = [
      "Thanks for your message!",
      "Got it, I'll get back to you soon.",
      "Sounds good!",
      "Let me check on that for you.",
      "Perfect, thanks!",
      "I'll take a look at this.",
      "Great idea!",
      "Thanks for letting me know."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
    setMessages(conversation.messages);
    
    // Mark messages as read
    const updatedMessages = conversation.messages.map(msg => 
      msg.sender !== "me" ? { ...msg, status: "read" } : msg
    );
    setMessages(updatedMessages);
  };

  const getMessageStatus = (status) => {
    switch (status) {
      case "sent":
        return <Check className="h-3 w-3 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="h-3 w-3 text-gray-400" />;
      case "read":
        return <CheckCheck className="h-3 w-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b px-6 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold flex items-center space-x-2">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <span>Messenger</span>
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarImage src="/api/placeholder/32/32" />
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 border-r bg-gray-50 p-4 space-y-4">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
            <Plus className="h-4 w-4 mr-2" />
            New Chat
          </Button>

          <div className="space-y-1">
            {folders.map((folder) => {
              const IconComponent = folder.icon;
              return (
                <Button
                  key={folder.name}
                  variant={activeFolder === folder.name ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveFolder(folder.name)}
                >
                  <IconComponent className="h-4 w-4 mr-3" />
                  {folder.name}
                  {folder.count > 0 && (
                    <Badge variant="secondary" className="ml-auto">
                      {folder.count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground px-2">Online Friends</h3>
            <div className="space-y-1">
              {conversations.filter(conv => conv.online).slice(0, 3).map(conv => (
                <div key={conv.id} className="flex items-center space-x-2 px-2 py-1">
                  <div className="relative">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback className="text-xs">
                        {conv.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-xs font-medium">{conv.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="w-80 border-r bg-background overflow-y-auto">
          <div className="p-4 border-b bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{activeFolder}</h2>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="divide-y">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedConversation?.id === conversation.id ? 'bg-blue-50 border-r-2 border-r-blue-500' : ''
                }`}
                onClick={() => handleConversationSelect(conversation)}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback>
                        {conversation.isGroup ? (
                          <Users className="h-6 w-6" />
                        ) : (
                          conversation.name.split(' ').map(n => n[0]).join('')
                        )}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && !conversation.isGroup && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold truncate">
                        {conversation.name}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {conversation.time}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {conversation.lastMessage}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        {conversation.isGroup && (
                          <Badge variant="outline" className="text-xs">
                            Group
                          </Badge>
                        )}
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-blue-600 hover:bg-blue-700">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b bg-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedConversation.avatar} />
                      <AvatarFallback>
                        {selectedConversation.isGroup ? (
                          <Users className="h-5 w-5" />
                        ) : (
                          selectedConversation.name.split(' ').map(n => n[0]).join('')
                        )}
                      </AvatarFallback>
                    </Avatar>
                    {selectedConversation.online && !selectedConversation.isGroup && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">{selectedConversation.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.isGroup 
                        ? "Group chat" 
                        : selectedConversation.online 
                          ? "Active now" 
                          : "Last seen recently"
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === "me"
                          ? "bg-blue-600 text-white"
                          : "bg-white border"
                      }`}>
                        {message.sender !== "me" && selectedConversation.isGroup && (
                          <p className="text-xs font-medium text-blue-600 mb-1">
                            {message.sender}
                          </p>
                        )}
                        <p className="text-sm">{message.text}</p>
                        <div className={`flex items-center justify-end space-x-1 mt-1 ${
                          message.sender === "me" ? "text-blue-100" : "text-gray-500"
                        }`}>
                          <span className="text-xs">{message.time}</span>
                          {message.sender === "me" && getMessageStatus(message.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Image className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="pr-20"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {newMessage.trim() ? (
                    <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon">
                      <Mic className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium">Welcome to Messenger</h3>
                <p className="text-muted-foreground">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}