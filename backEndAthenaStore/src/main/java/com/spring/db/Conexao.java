package com.spring.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
	public static final String url = "jdbc:postgresql://localhost:5432/postgres";
	public static final String user = "postgres";
	public static final String pass = "postgres"; 
	
	public static Connection getconnection() throws Exception {
		
		return DriverManager.getConnection(url, user, pass);
	}
}
