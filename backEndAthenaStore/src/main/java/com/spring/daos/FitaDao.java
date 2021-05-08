package com.spring.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.spring.db.Conexao;
import com.spring.models.*;

public abstract class FitaDao {
	
	public static void AdicionarFita(Fita fita)throws Exception {
		Connection conexao = Conexao.getconnection();
		
		String sql = "INSERT INTO fita (nome,preco) values (?,?)";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,fita.getNome());
		stmt.setFloat(2,fita.getPreco());
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void RemoverFita(Fita fita) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "DELETE FROM fita WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1,fita.getId());

		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void AtualizarFita(Fita fita) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "UPDATE fita SET nome = ?, preco = ?  WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,fita.getNome());
		stmt.setFloat(2,fita.getPreco());
		stmt.setInt(3,fita.getId());
		
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static List<Fita> TodasFitas() throws Exception {
		List<Fita> fitas = new ArrayList<Fita>();
		
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM fita";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			Fita fita = new Fita();
			fita.setPreco(rs.getFloat("preco"));
			fita.setNome(rs.getString("nome"));			
			fita.setId(rs.getInt("id"));
			
			fitas.add(fita);
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return fitas;
	}
	
	public static Fita GetFita(int id) throws Exception {
		
		Fita fita = new Fita();
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM fita WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setInt(1,id);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {			
			fita.setPreco(rs.getFloat("preco"));
			fita.setNome(rs.getString("nome"));			
			fita.setId(rs.getInt("id"));
			
			
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return fita;
	}
}
